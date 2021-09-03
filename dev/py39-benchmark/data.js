window.BENCHMARK_DATA = {
  "lastUpdate": 1630677785557,
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
          "id": "db26e1c0f110d2f46755abb415e527ea3c6e23c6",
          "message": "Merge pull request #318 from TeoZosa/dependabot/pip/pre-commit-2.15.0",
          "timestamp": "2021-09-03T13:53:44Z",
          "tree_id": "61d88231de879d69e1c441680d95335ffd8bc236"
        },
        "date": 1630677783387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16396.604432676857,
            "unit": "iter/sec",
            "range": "stddev: 0.000025422483827471812",
            "extra": "mean: 60.98823717471015 usec\nrounds: 7446"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4897692.981098993,
            "unit": "iter/sec",
            "range": "stddev: 1.6047071265652817e-8",
            "extra": "mean: 204.1777636658408 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14471.00656368755,
            "unit": "iter/sec",
            "range": "stddev: 0.000006045222971112357",
            "extra": "mean: 69.10369334703533 usec\nrounds: 9470"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148053.06575871955,
            "unit": "iter/sec",
            "range": "stddev: 4.421737068557434e-7",
            "extra": "mean: 6.754334973580952 usec\nrounds: 46947"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16519.767332120657,
            "unit": "iter/sec",
            "range": "stddev: 0.000002019333690680531",
            "extra": "mean: 60.53354020644243 usec\nrounds: 13928"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4966553.233517742,
            "unit": "iter/sec",
            "range": "stddev: 2.09565489799836e-8",
            "extra": "mean: 201.34688041814286 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}