window.BENCHMARK_DATA = {
  "lastUpdate": 1614867241279,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7159404f44095ffec53e246e35f239715d75cad",
          "message": "Merge pull request #94 from TeoZosa/dependabot/pip/docs/poetry-1.1.5",
          "timestamp": "2021-03-04T14:09:09Z",
          "tree_id": "11e309e4a489756ef1c8fc2eaec5b7df98c05c92",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/c7159404f44095ffec53e246e35f239715d75cad"
        },
        "date": 1614867240081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15344.539336269747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002028479105400701",
            "extra": "mean: 65.16976352859999 usec\nrounds: 11642"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3975332.5074027083,
            "unit": "iter/sec",
            "range": "stddev: 8.24886398798249e-7",
            "extra": "mean: 251.55128486446117 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12282.001497385658,
            "unit": "iter/sec",
            "range": "stddev: 0.00002968541182728788",
            "extra": "mean: 81.41995424873214 usec\nrounds: 8874"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128866.78312994645,
            "unit": "iter/sec",
            "range": "stddev: 0.000012418562353058582",
            "extra": "mean: 7.7599516004960085 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14944.106501671913,
            "unit": "iter/sec",
            "range": "stddev: 0.00002540183088658413",
            "extra": "mean: 66.91601133116404 usec\nrounds: 6707"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4151718.8029347784,
            "unit": "iter/sec",
            "range": "stddev: 3.4240397825340687e-7",
            "extra": "mean: 240.86409688773313 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}