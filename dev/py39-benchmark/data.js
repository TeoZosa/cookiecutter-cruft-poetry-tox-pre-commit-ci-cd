window.BENCHMARK_DATA = {
  "lastUpdate": 1631107517070,
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
          "id": "12f75286ea706a52440fc4ac2595871a37b568f3",
          "message": "Merge pull request #322 from TeoZosa/dependabot/pip/hypothesis-6.19.0",
          "timestamp": "2021-09-08T13:16:29Z",
          "tree_id": "3edaa062b64d944115361767d1622ae9bec94416"
        },
        "date": 1631107514415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15840.239292326325,
            "unit": "iter/sec",
            "range": "stddev: 0.00003836474279912789",
            "extra": "mean: 63.130359431150886 usec\nrounds: 12300"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4147992.790127736,
            "unit": "iter/sec",
            "range": "stddev: 5.04557490219903e-8",
            "extra": "mean: 241.08045760831695 nsec\nrounds: 5216"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13741.282420373089,
            "unit": "iter/sec",
            "range": "stddev: 0.00003390919276817254",
            "extra": "mean: 72.77341149159271 usec\nrounds: 8841"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 137853.9793636392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010118862481760038",
            "extra": "mean: 7.254052473611532 usec\nrounds: 36361"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15540.999663156064,
            "unit": "iter/sec",
            "range": "stddev: 0.000046126122073984024",
            "extra": "mean: 64.34592508040247 usec\nrounds: 13054"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4574466.969384836,
            "unit": "iter/sec",
            "range": "stddev: 2.0994047936690224e-8",
            "extra": "mean: 218.60470448083018 nsec\nrounds: 52078"
          }
        ]
      }
    ]
  }
}