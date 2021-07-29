window.BENCHMARK_DATA = {
  "lastUpdate": 1627565300159,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8947a08a02821f3a852563c1206e33c5b3a1c106",
          "message": "Merge pull request #259 from TeoZosa/dependabot/pip/pylint-2.9.6",
          "timestamp": "2021-07-29T13:18:33Z",
          "tree_id": "62c6cddaa5482ab2978aef7efd6db040f5225552"
        },
        "date": 1627565298717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16265.061993485011,
            "unit": "iter/sec",
            "range": "stddev: 0.00005655326297414414",
            "extra": "mean: 61.48147485700031 usec\nrounds: 5071"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5003978.460068307,
            "unit": "iter/sec",
            "range": "stddev: 1.1523157158744387e-8",
            "extra": "mean: 199.84098812151402 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14388.95861625293,
            "unit": "iter/sec",
            "range": "stddev: 0.000016348675676788168",
            "extra": "mean: 69.4977327178117 usec\nrounds: 9533"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152921.06522553644,
            "unit": "iter/sec",
            "range": "stddev: 0.000003970622940623303",
            "extra": "mean: 6.539321437011603 usec\nrounds: 38023"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16182.701756223487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000550897754904338",
            "extra": "mean: 61.79437865592645 usec\nrounds: 13812"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4994947.283226533,
            "unit": "iter/sec",
            "range": "stddev: 1.0123082602219568e-7",
            "extra": "mean: 200.2023131170955 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}