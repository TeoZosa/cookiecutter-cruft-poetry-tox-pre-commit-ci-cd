window.BENCHMARK_DATA = {
  "lastUpdate": 1628294464783,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "ec3211f8c1a9b044b05f9e9bbde25ea625381c23",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-08-06T23:21:52Z",
          "tree_id": "e3dfbac8bcb022736cac6a721697d0eb3bc9befa"
        },
        "date": 1628294392833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13854.566071076893,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358482427585292",
            "extra": "mean: 72.17837028383175 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5207235.30131837,
            "unit": "iter/sec",
            "range": "stddev: 4.09413403291918e-9",
            "extra": "mean: 192.0404863876022 nsec\nrounds: 50762"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12476.101903018787,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642766681508162",
            "extra": "mean: 80.1532407937478 usec\nrounds: 9776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154915.5849466623,
            "unit": "iter/sec",
            "range": "stddev: 2.715096677208523e-7",
            "extra": "mean: 6.455128451693881 usec\nrounds: 49505"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13666.897720791685,
            "unit": "iter/sec",
            "range": "stddev: 0.00000852245235682972",
            "extra": "mean: 73.16949467461683 usec\nrounds: 10516"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4923537.779875175,
            "unit": "iter/sec",
            "range": "stddev: 2.3445902331084e-8",
            "extra": "mean: 203.10598693632863 nsec\nrounds: 172414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "cb40c9cfa067bce841322906acc1a9e84597cc74",
          "message": ":hammer: Decouple package `build` `make` target from Poetry\n\nSince the `package` testenv is self-contained, installing all required\nbuild dependencies (including Poetry) itself, `tox` is the only required\n dependency from the user's point-of-view. Therefore, calling `tox`\ndirectly should in theory be more robust; it will work so long as some\n`tox` executable is available, whether or not it was installed by Poetry\n and whether or not a Poetry executable is available.",
          "timestamp": "2021-08-06T23:55:14Z",
          "tree_id": "d4a294fd5383a8a0832b6439c2ef8854e4463e2e"
        },
        "date": 1628294463099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15650.095567091323,
            "unit": "iter/sec",
            "range": "stddev: 0.000027628242821445714",
            "extra": "mean: 63.89737338746851 usec\nrounds: 7906"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4280239.153384501,
            "unit": "iter/sec",
            "range": "stddev: 3.336908850592665e-7",
            "extra": "mean: 233.63180517867076 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13122.352972754508,
            "unit": "iter/sec",
            "range": "stddev: 0.000059010351813684555",
            "extra": "mean: 76.20584525323056 usec\nrounds: 8026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119643.46157676619,
            "unit": "iter/sec",
            "range": "stddev: 0.000020215459240719416",
            "extra": "mean: 8.358166729891675 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15567.713051694325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006693114133226058",
            "extra": "mean: 64.23551080877381 usec\nrounds: 13369"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4310667.697815875,
            "unit": "iter/sec",
            "range": "stddev: 5.0823262727491725e-8",
            "extra": "mean: 231.9826231342327 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}