window.BENCHMARK_DATA = {
  "lastUpdate": 1613399106739,
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
          "id": "1f26a2889f8f0bf42bba3a4887b71dcd19130251",
          "message": "Merge pull request #66 from TeoZosa/dependabot/pip/pre-commit-2.10.1",
          "timestamp": "2021-02-15T14:20:40Z",
          "tree_id": "68b869a8a8010847fd1c9bbcb08eb4fc342813a8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/1f26a2889f8f0bf42bba3a4887b71dcd19130251"
        },
        "date": 1613399105236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15998.96257544441,
            "unit": "iter/sec",
            "range": "stddev: 0.000024479158664704134",
            "extra": "mean: 62.50405270244359 usec\nrounds: 5882"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4436523.747424271,
            "unit": "iter/sec",
            "range": "stddev: 5.06451780908242e-8",
            "extra": "mean: 225.40170118122552 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13916.621957612502,
            "unit": "iter/sec",
            "range": "stddev: 0.000021767802574567995",
            "extra": "mean: 71.85651827331503 usec\nrounds: 9823"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 189615.4768986529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000097971026188629",
            "extra": "mean: 5.273831104696625 usec\nrounds: 26176"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14784.510468534949,
            "unit": "iter/sec",
            "range": "stddev: 0.000019461348840222424",
            "extra": "mean: 67.63835719337779 usec\nrounds: 14124"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4396959.548330751,
            "unit": "iter/sec",
            "range": "stddev: 5.706889017954263e-8",
            "extra": "mean: 227.42988399335735 nsec\nrounds: 144907"
          }
        ]
      }
    ]
  }
}